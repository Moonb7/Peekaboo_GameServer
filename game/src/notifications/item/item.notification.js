import { serializer } from '../../utils/packet/create.packet.js';
import { PACKET_TYPE } from '../../constants/header.js';
import { ErrorCodesMaps } from '../../Error/error.codes.js';

export const itemChangeNotification = (gameSession, userId, itemId) => {
  const payload = {
    userId,
    itemId,
  };
  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemChangeNotification,
      payload,
      user.socket.sequence++,
    );
    user.socket.write(packet);
  });
};

export const itemUseNotification = (gameSession, userId, itemId) => {
  const payload = {
    userId,
    itemId,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemUseNotification,
      payload,
      user.socket.sequence++,
    );
    user.socket.write(packet);
  });
};

export const itemDiscardNotification = (gameSession, userId, itemId) => {
  const payload = {
    userId,
    itemId,
  };

  gameSession.users.forEach((user) => {
    if (userId !== user.id) {
      const packet = serializer(
        PACKET_TYPE.ItemDiscardNotification,
        payload,
        user.socket.sequence++,
      );
      user.socket.write(packet);
    }
  });
};

export const itemDeleteNotification = (gameSession, itemIds) => {
  const payload = {
    itemIds,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemDeleteNotification,
      payload,
      user.socket.sequence++,
    );
    user.socket.write(packet);
  });
};

export const itemDisuseNotification = (gameSession, userId, itemId) => {
  const payload = {
    userId,
    itemId,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemDisuseNotification,
      payload,
      user.socket.sequence++,
    );
    user.socket.write(packet);
  });
};
export const itemCreateNotification = (gameSession, itemInfo) => {
  const payload = {
    itemInfo,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemCreateNotification,
      payload,
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};

export const itemGetNotification = (gameSession, itemId, userId) => {
  gameSession.users.forEach((user) => {
    if (user.id !== userId) {
      const packet = serializer(
        PACKET_TYPE.ItemGetNotification,
        {
          itemId,
          userId,
        },
        user.socket.sequence++,
      );

      user.socket.write(packet);
    }
  });
};

export const itemPurchaseNotification = (gameSession, itemInfo, soulCredit) => {
  const payload = {
    itemInfo,
    soulCredit,
  };

  gameSession.users.forEach((user) => {
    const packet = serializer(
      PACKET_TYPE.ItemPurchaseNotification,
      payload,
      user.socket.sequence++,
    );

    user.socket.write(packet);
  });
};
