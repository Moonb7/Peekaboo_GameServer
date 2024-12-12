import { config } from '../../config/config.js';
import { PACKET_TYPE } from '../../constants/header.js';
import { GLOBAL_FAIL_CODE } from '../../constants/state.js';
import { setGameRedis } from '../../redis/game.redis.js';
import { serializer } from '../../utils/packet/create.packet.js';

/**
 * 토큰이 유효하지 않을때 실패 응답 보내주는 함수입니다.
 * @param {*} socket
 */
export const sendCreateRoomResponse = async (socket, game) => {
  const data = {
    globalFailCode: GLOBAL_FAIL_CODE.NONE,
    message: '방이 성공적으로 생성되었습니다.',
    gameSessionId: game.id,
    inviteCode: game.inviteCode, // 임시 고스트 타입
  };
  const responseData = serializer(
    PACKET_TYPE.CreateRoomResponse,
    data,
    socket.sequence++,
  ); // sequence도 임시로
  socket.write(responseData);

  await setGameRedis(game.id, game.inviteCode, game.state);
};

export const sendJoinRoomResponse = (socket, game, isSuccess) => {
  const players = isSuccess
    ? game.users.map((user) => {
        const userId = user.id;
        const moveInfo = {
          position: user.character.position.getPosition(),
          rotation: user.character.rotation.getRotation(),
        };
        const isHost = game.hostId === userId ? true : false;
        return {
          userId,
          moveInfo,
          isHost,
        };
      })
    : [];

  const data = {
    globalFailCode: isSuccess
      ? GLOBAL_FAIL_CODE.NONE
      : GLOBAL_FAIL_CODE.INVALID_REQUEST,
    message: isSuccess
      ? '방에 성공적으로 참가하였습니다.'
      : `방 참가에 실패하였습니다.`,
    gameSessionId: isSuccess ? game.id : '',
    playerInfos: players,
  };

  const responseData = serializer(
    PACKET_TYPE.JoinRoomResponse,
    data,
    socket.sequence++,
  ); // sequence도 임시로

  socket.write(responseData);
};
