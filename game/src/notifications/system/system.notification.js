import { serializer } from '../../utils/packet/create.packet.js';
import { PACKET_TYPE } from '../../constants/header.js';
import { gameSessions } from '../../sessions/sessions.js';

/**
 * 연결 종료한 유저를 접속 중인 다른 유저들에게 disconnectPlayerNotification로 알려주는 함수
 * @param {*} gameSession
 * @param {*} disconnectUserId
 */
export const disconnectPlayerNotification = async (
  gameSession,
  disconnectUserId,
) => {
  const payload = {
    userId: disconnectUserId,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.DisconnectPlayerNotification,
      payload,
      user.socket.sequence++,
    );
    user.socket.write(packet);
  });
};

export const blockInteractionNotification = (gameSession) => {
  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.BlockInteractionNotification,
      {},
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};

export const remainingTimeNotification = (gameSession) => {
  const payload = {
    remainingTime: gameSession.remainingTime,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.RemainingTimeNotification,
      payload,
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};

export const stageEndNotification = (gameSession) => {
  const startPosition = {
    x: -13.17,
    y: 0,
    z: 22.5,
  };

  const payload = {
    remainingDay: gameSession.day,
    startPosition,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.StageEndNotification,
      payload,
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};

export const submissionEndNotification = (gameSession, result) => {
  const payload = {
    result,
    submissionId: result ? gameSession.submissionId : 0,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.SubmissionEndNotification,
      payload,
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};
