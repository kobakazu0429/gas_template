export const validateEmail = (targetEmail: string): boolean => {
  const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return re.test(targetEmail);
};

export const validateImageURL = (targetURL: string): boolean => {
  const re =
    /^(http|https):\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?\.(jpg|jpeg|png|gif|bmp)$/i;
  return re.test(targetURL);
};

export const validateURL = (targetURL: string): boolean => {
  const re = /^(http|https):\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/;
  return re.test(targetURL);
};

export const validateSlackChannel = (targetChannel: string): boolean => {
  const re = /^[A-Z0-9]{9}$/;
  return re.test(targetChannel);
};

export const validateSlackUserId = (targetUserId: string): boolean => {
  const re = /^U[A-Z0-9]{8}$/;
  return re.test(targetUserId);
};
