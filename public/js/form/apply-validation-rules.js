import { validate } from "validate.js";
import { prop, isNil, always, ifElse } from 'ramda';

export const validateRequired = (key, value, msg) => {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}

export const validateEmail = (key, value, msg) => {
  const constraint = {
    [key]: {
      email: {
        message: `^${msg}`
      }
    }
  };
  return validate( {[key]: value}, constraint );
}

export function validateFormat(key, value, pattern, msg) {
  const constraint = {
    [key]: {
      format: {
        pattern: pattern,
        flags: "gi",
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value}, constraint );
}

export function validateEquality(key, value, partnerValue, msg) {
  const constraint = {
    [key]: {
      equality: {
        attribute: "partnerKey",
        message: `^${msg}`
      }
    }
  };
  return validate( {[key]: value, partnerKey: partnerValue}, constraint );
}

export function validateNumericality(key, value, msg) {
  const constraint = {
    [key]: {
      numericality: {
        notValid: "must be evenly divisible by two",
        message: `^${msg}`
      }
    }
  };
  return validate( {[key]: value}, constraint );
}

export const readValidationMsg = (key, messageList) => {
  return ifElse(isNil, always(""), prop(key))(messageList);
}

