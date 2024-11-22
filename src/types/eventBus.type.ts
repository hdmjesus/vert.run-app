export const EventBusVariant = {
  MESSAGE_SEND: 'messageSent',
  IMAGE_SEND: 'imageDontSend',
  IMAGE_DONT_SEND: 'imageDontSend',
  RESESEND_MESSAGE: 'resendMessage',
  MESSAGE_RECEIVED: 'messageReceived',
  MESSAGE_READ: 'messageRead',
  MESSAGE_DONT_SEND: 'messageDontSend',
  CHANGE_LOCATION: 'changeLocation'
} as const

export type EventBussVariantType =
  (typeof EventBusVariant)[keyof typeof EventBusVariant]
