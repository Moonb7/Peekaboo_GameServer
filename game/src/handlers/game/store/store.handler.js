import Item from '../../../classes/models/item.class.js';
import { ErrorCodesMaps } from '../../../Error/error.codes.js';
import { getGameAssets } from '../../../init/load.assets.js';
import { extractSoulNotification } from '../../../notifications/extractor/extractor.notification.js';
import { itemPurchaseNotification } from '../../../notifications/item/item.notification.js';
import { itemPurchaseResponse } from '../../../response/item/item.response.js';

export const itemPurchaseHandler = ({ socket, payload }) => {
  try {
    const { itemTypeId } = payload;

    const user = getUserById(socket.userId);
    if (!user) {
      throw new CustomError(ErrorCodesMaps.USER_NOT_FOUND);
    }

    const gameSession = getGameSessionById(user.gameId);
    if (!gameSession) {
      throw new CustomError(ErrorCodesMaps.GAME_NOT_FOUND);
    }

    const gameAssets = getGameAssets();
    const itemDatas = gameAssets.item.data;

    const itemInfo = itemDatas.find((item) => item.Id === itemTypeId);
    if (!itemInfo) {
      throw new CustomError(ErrorCodesMaps.ITEM_NOT_FOUND);
    }

    if (gameSession.soulAccumulatedAmount < itemInfo.Value) {
      itemPurchaseResponse(user.socket, false);
      return;
    }

    // 아이템 가격만큼 골드 차감
    gameSession.soulAccumulatedAmount -= itemInfo.Value;

    extractSoulNotification(gameSession, gameSession.soulAccumulatedAmount);

    if (itemInfo.SpaceValue === 0) {
      // 아이템의 SpaceValue가 0이면 Heart 아이템으로 응답만
      itemPurchaseResponse(user.socket, true);
    } else {
      // 아이템의 SpaceValue가 1이상이면 랜턴
      const newItemId = gameSession.items[gameSession.items.length - 1].id + 1;

      // 상점 근처에 있는 고정된 포지션 상점에서 구입시 바닥에 떨구는 형식으로 하기로 함
      // 임시로 유저 캐릭터 포지션
      const storePosition = user.character.position.getPosition();

      const item = new Item(newItemId, itemTypeId, storePosition);

      gameSession.addItem(item);

      const itemInfo = {
        itemId: item.id,
        itemTypeId: item.typeId,
        position: storePosition,
      };
      itemPurchaseNotification(gameSession, itemInfo);
    }

    gameSession.soulAccumulatedAmount;
  } catch (e) {
    handleError(e);
  }
};
