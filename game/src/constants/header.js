export const TOTAL_HEADER_LENGTH_EXCEPT_VERSION = 11;
export const PACKET_TYPE_LENGTH = 2;
export const VERSION_LENGTH = 1;
export const SEQUENCE_LENGTH = 4;
export const PAYLOAD_LENGTH = 4;

export const PACKET_TYPE = {
  // 1 ~ 15
  PlayerMoveRequest: 1,
  PlayerMoveNotification: 2,
  GhostMoveRequest: 3,
  GhostMoveNotification: 4,
  PingRequest: 5, // S2C
  PingResponse: 6, // C2S
  PlayerStateChangeRequest: 7,
  PlayerStateChangeNotification: 8,
  GhostStateChangeRequest: 9,
  GhostStateChangeNotification: 10,
  ItemChangeRequest: 11,
  ItemChangeNotification: 12,

  // 플레이어 : 100번대
  PlayerAttackedRequest: 101,
  PlayerLifeResponse: 102,

  // 귀신 : 200번대
  GhostSpecialStateRequest: 201,
  GhostSpecialStateNotification: 202,
  GhostAttackedRequest: 203,
  GhostSpawnRequest: 204,
  GhostSpawnNotification: 205,
  GhostDeleteNotification: 206,

  // 아이템 : 300번대
  ItemGetRequest: 301,
  ItemGetResponse: 302,
  ItemGetNotification: 303,
  ItemUseRequest: 304,
  ItemUseResponse: 305,
  ItemUseNotification: 306,
  ItemDiscardRequest: 307,
  ItemDiscardResponse: 308,
  ItemDiscardNotification: 309,
  ItemDisuseRequest: 310,
  ItemDisuseNotification: 311,
  ItemDeleteNotification: 312,
  ItemPurchaseRequest: 313,
  ItemPurchaseNotification: 314,
  ItemPurchaseResponse: 315,
  ItemCreateRequest: 316,
  ItemCreateNotification: 317,

  // 문 : 350번대
  DoorToggleRequest: 350,
  DoorToggleNotification: 351,

  // 게임 시스템 : 400번대
  ExtractSoulRequest: 401,
  ExtractSoulNotification: 402,
  DisconnectPlayerNotification: 403,
  BlockInteractionNotification: 404,
  RemainingTimeNotification: 405,
  StartStageRequest: 406,
  SpawnInitialDataRequest: 407,
  SpawnInitialDataResponse: 408,
  StartStageNotification: 409,
  StageEndNotification: 410,
  SubmissionEndNotification: 411,

  // 로그인, 로비 : 500번대
  RegistAccountRequest: 500,
  RegistAccountResponse: 501,
  LoginRequest: 502,
  LoginResponse: 503,
  ChangeNicknameRequest: 504,
  ChangeNicknameResponse: 505,
  EnterLobbyRequest: 506,
  EnterLobbyResponse: 507,
  RefreshLobbyRequest: 508,
  RefreshLobbyResponse: 509,
  SearchRoomRequest: 510,
  SearchRoomResponse: 511,

  // 방 : 600번대
  CreateRoomRequest: 601,
  CreateRoomResponse: 602,
  JoinRoomRequest: 603,
  JoinRoomResponse: 604,
  JoinRoomNotification: 605,
};
