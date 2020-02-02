export class UtilityFunctions {

  public isJson(str: string): boolean {
    str = typeof str !== 'string' ? JSON.stringify(str) : str;
    try {
      str = JSON.parse(str);
    } catch (e) {
      return false;
    }

    if (typeof str === 'object' && str !== null) {
      return true;
    }
    return false;
  }

  public checkIfObjectEmpty(object: Object): boolean {
    if (Object.entries(object).length === 0 && object.constructor === Object) {
      return true;
    }
    return false;
  }
}

export const utilityFunctions = new UtilityFunctions();
