import { PACKET_TYPE } from './header.js';

export const packetNames = {
  common: {
    GamePacket: 'common.GamePacket',
  },
};

export const PACKET_MAPS = {
  // 1 ~ 15
  [PACKET_TYPE.PlayerMoveRequest]: 'playerMoveRequest',
  [PACKET_TYPE.PlayerMoveNotification]: 'playerMoveNotification',
  [PACKET_TYPE.GhostMoveRequest]: 'ghostMoveRequest',
  [PACKET_TYPE.GhostMoveNotification]: 'ghostMoveNotification',
  [PACKET_TYPE.PingRequest]: 'pingRequest', // S2C
  [PACKET_TYPE.PingResponse]: 'pingResponse', // C2S
  [PACKET_TYPE.PlayerStateChangeRequest]: 'playerStateChangeRequest',
  [PACKET_TYPE.PlayerStateChangeNotification]: 'playerStateChangeNotification',
  [PACKET_TYPE.GhostStateChangeRequest]: 'ghostStateChangeRequest',
  [PACKET_TYPE.GhostStateChangeNotification]: 'ghostStateChangeNotification',
  [PACKET_TYPE.ItemChangeRequest]: 'itemChangeRequest',
  [PACKET_TYPE.ItemChangeNotification]: 'itemChangeNotification',

  // 플레이어 : 100번대
  [PACKET_TYPE.PlayerAttackedRequest]: 'playerAttackedRequest',
  [PACKET_TYPE.PlayerLifeResponse]: 'playerLifeResponse',

  // 귀신 : 200번대
  [PACKET_TYPE.GhostAttackedRequest]: 'ghostAttackedRequest',
  [PACKET_TYPE.GhostSpawnRequest]: 'ghostSpawnRequest',
  [PACKET_TYPE.GhostSpawnNotification]: 'ghostSpawnNotification',
  [PACKET_TYPE.GhostDeleteNotification]: 'ghostDeleteNotification',

  // 아이템 : 300번대
  [PACKET_TYPE.ItemGetRequest]: 'itemGetRequest',
  [PACKET_TYPE.ItemGetResponse]: 'itemGetResponse',
  [PACKET_TYPE.ItemGetNotification]: 'itemGetNotification',
  [PACKET_TYPE.ItemUseRequest]: 'itemUseRequest',
  [PACKET_TYPE.ItemUseResponse]: 'itemUseResponse',
  [PACKET_TYPE.ItemUseNotification]: 'itemUseNotification',
  [PACKET_TYPE.ItemDiscardRequest]: 'itemDiscardRequest',
  [PACKET_TYPE.ItemDiscardResponse]: 'itemDiscardResponse',
  [PACKET_TYPE.ItemDiscardNotification]: 'itemDiscardNotification',
  [PACKET_TYPE.ItemDisuseRequest]: 'itemDisuseRequest',
  [PACKET_TYPE.ItemDisuseNotification]: 'itemDisuseNotification',
  [PACKET_TYPE.ItemDeleteNotification]: 'itemDeleteNotification',
  [PACKET_TYPE.ItemPurchaseRequest]: 'itemPurchaseRequest',
  [PACKET_TYPE.ItemPurchaseNotification]: 'itemPurchaseNotification',
  [PACKET_TYPE.ItemPurchaseResponse]: 'itemPurchaseResponse',
  [PACKET_TYPE.ItemCreateRequest]: 'itemCreateRequest',
  [PACKET_TYPE.ItemCreateNotification]: 'itemCreateNotification',

  // 문 : 350번대
  [PACKET_TYPE.DoorToggleRequest]: 'doorToggleRequest',
  [PACKET_TYPE.DoorToggleNotification]: 'doorToggleNotification',

  // 게임 시스템 : 400번대
  [PACKET_TYPE.ExtractSoulRequest]: 'extractSoulRequest',
  [PACKET_TYPE.ExtractSoulNotification]: 'extractSoulNotification',
  [PACKET_TYPE.DisconnectPlayerNotification]: 'disconnectPlayerNotification',
  [PACKET_TYPE.RemainingTimeNotification]: 'remainingTimeNotification',
  [PACKET_TYPE.BlockInteractionNotification]: 'blockInteractionNotification',
  [PACKET_TYPE.StartStageRequest]: 'startStageRequest',
  [PACKET_TYPE.SpawnInitialDataRequest]: 'spawnInitialDataRequest',
  [PACKET_TYPE.SpawnInitialDataResponse]: 'spawnInitialDataResponse',
  [PACKET_TYPE.StartStageNotification]: 'startStageNotification',
  [PACKET_TYPE.StageEndNotification]: 'stageEndNotification',
  [PACKET_TYPE.SubmissionEndNotification]: 'submissionEndNotification',

  // 로그인, 로비 : 500번대
  [PACKET_TYPE.RegistAccountRequest]: 'registAccountRequest',
  [PACKET_TYPE.RegistAccountResponse]: 'registAccountResponse',
  [PACKET_TYPE.LoginRequest]: 'loginRequest',
  [PACKET_TYPE.LoginResponse]: 'loginResponse',
  [PACKET_TYPE.ChangeNicknameRequest]: 'changeNicknameRequest',
  [PACKET_TYPE.ChangeNicknameResponse]: 'changeNicknameResponse',
  [PACKET_TYPE.EnterLobbyRequest]: 'enterLobbyRequest',
  [PACKET_TYPE.EnterLobbyResponse]: 'enterLobbyResponse',
  [PACKET_TYPE.RefreshLobbyRequest]: 'refreshLobbyRequest',
  [PACKET_TYPE.RefreshLobbyResponse]: 'refreshLobbyResponse',
  [PACKET_TYPE.SearchRoomRequest]: 'searchRoomRequest',
  [PACKET_TYPE.SearchRoomResponse]: 'searchRoomResponse',

  // 방 : 600번대
  [PACKET_TYPE.CreateRoomRequest]: 'createRoomRequest',
  [PACKET_TYPE.CreateRoomResponse]: 'createRoomResponse',
  [PACKET_TYPE.JoinRoomRequest]: 'joinRoomRequest',
  [PACKET_TYPE.JoinRoomResponse]: 'joinRoomResponse',
  [PACKET_TYPE.JoinRoomNotification]: 'joinRoomNotification',

  [PACKET_TYPE.StageEndNotification]: 'stageEndNotification',
};
