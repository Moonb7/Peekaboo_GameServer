import CustomError from '../../../Error/custom.error.js';
import { getGameSessionById } from '../../../sessions/game.session.js';
import { getUserById } from '../../../sessions/user.sessions.js';
import { ErrorCodesMaps } from '../../../Error/error.codes.js';
import { itemDeleteNotification } from '../../../notifications/item/item.notification.js';
import { extractSoulNotification } from '../../../notifications/extractor/extractor.notification.js';
import { getGameAssets } from '../../../init/load.assets.js';
import { handleError } from '../../../Error/error.handler.js';

export const extractorSoulHandler = async ({ socket, payload }) => {
  try {
    const { userId } = payload;

    // ------------------------- 검증 -------------------------------
    // 유저 검증
    const user = getUserById(userId);
    if (!user) {
      throw new CustomError(ErrorCodesMaps.USER_NOT_FOUND);
    }

    // 게임 세션 검증
    const gameSession = getGameSessionById(user.gameId);
    if (!gameSession) {
      throw new CustomError(ErrorCodesMaps.GAME_NOT_FOUND);
    }

    // 유저 인벤토리
    const userInventory = user.character.inventory.slot;

    // 인벤토리에 소울 아이템이 있는지 검증
    const soulItems = [];
    let soulValue = 0;
    const gameAssets = getGameAssets();

    userInventory.forEach((itemId, slot) => {
      const item = gameSession.items.find((item) => item.id === itemId);
      if (!item) {
        console.error(`Extractor : Item Not Exist`);
        return;
      }

      if (!this.spawnSoulItem.includes(item.typeId)) {
        console.error(`Extractor : Item is Not SoulItem`);
        return;
      }

      const soulItemData = gameAssets.item.data.find(
        (data) => data.id === item.typeId,
      );

      soulValue += soulItemData.Value;

      // inventory에서 제거
      user.character.inventory.removeInventorySlot(slot);
      // 게임세션의 items에서 제거
      gameSession.removeItem(itemId);

      soulItems.push(item.id);
    });

    itemDeleteNotification(gameSession, soulItems);

    gameSession.soulCredit += soulValue;

    extractSoulNotification(gameSession, gameSession.soulCredit);

    // 아이템 검증
    // const item = gameSession.getItem(itemId);
    // if (!item) {
    //   throw new CustomError(ErrorCodesMaps.ITEM_NOT_FOUND);
    // }

    // // 인벤토리 검증
    // // 유저의 인벤토리(Redis)에서 아이템 찾기
    // const serverItemId = user.character.inventory.slot[inventorySlot - 1];

    // if (!serverItemId) {
    //   throw new CustomError(ErrorCodesMaps.ITEM_NOT_FOUND);
    // }

    // // ------------------------- 로직 ------------------------------
    // // TODO : 데이터 테이블에 명시된 소울 타입의 영혼 수치를 가져온다.
    // // 테스트 용도로 모든 영혼의 가치를 10으로 고정했다.
    // const gameAssets = getGameAssets();
    // const soulValue = gameAssets.item.data.find(itemId);

    // // 영혼의 가치만큼 유저의 EXP와 MONEY를 올려준다. (Response)
    // // TODO : DB에도 반영 ********************************************
    // user.exp += soulValue;

    // // submission의 영혼 추출 현재 수치를 영혼의 가치만큼 올려준다. (Notification)
    // gameSession.currentSoulAmount += soulValue;

    // // 유저의 인벤토리(Redis)에서 영혼 아이템을 삭제시켜준다.
    // await removeItemRedis(socket.userId, inventorySlot);

    // // 게임에서 해당 아이템(소울)을 삭제시킨다. (Notification)
    // gameSession.removeItem(itemId);

    // // ---------------------- 패킷 송신 ----------------------------
    // // 추출한 영혼 아이템 삭제 Noti
    // //itemDeleteNotification(gameSession, itemId);

    // // 영혼 누적 추출량 Noti
    // extractSoulNotification(gameSession, gameSession.currentSoulAmount);
  } catch (e) {
    handleError(e);
  }
};
