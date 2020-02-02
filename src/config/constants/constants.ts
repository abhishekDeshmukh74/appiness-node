import { join } from 'path';

export const CONSTANTS = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  STATUS: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500
  },
  MESSAGES: {
    ERROR: {
      DEFAULT_TEXT: 'Error occurred',
      INVALID_JSON: 'Invalid JSON in request',
      PAYLOAD_SIZE_EXCEEDED: 'Request Payload size exceeded',
      TOKEN_REQUIRED: 'Authentication token is required!',
      INVALID_AUTH_TOKEN: 'Invalid Authentication token. Please request a new one',
      TOKEN_EXPIRED: 'Authentication token expired. Please request a new one',
      TOKEN_BEFORE_ACTIVE: 'Authentication token not active yet. Please request a new one',
      FRESHDESK_DUPLICATE_ERROR: 'duplicate_value',
    },
  },
  BODY_PARSER_PAYLOAD_LIMIT: '100kb',
  DATABASE_COLLECTIONS: {
    CATEGORY: 'category',
    PRODUCT: 'product',
    USER: 'user',
    USER_ROLE: 'userRole',
  },
  USER_ROLE: {
    ADMIN: 'ADMIN',
    USER: 'USER',
  },
  MONGODB_URL: 'mongodb://appiness:appiness123@ds157325.mlab.com:57325/appiness',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};
