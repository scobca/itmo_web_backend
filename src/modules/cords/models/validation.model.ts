import { CordsDto } from "../dto/cords.dto";

export class ValidationModel {
  public checkCordsValid(data: CordsDto) {
    if (data.r > 0) {
      // 2 quarter
      if (data.x <= 0 && data.y >= 0) {
        return (
          Math.abs(data.x) <= Math.abs(data.r / 2) &&
          Math.abs(data.y) <= Math.abs(data.r)
        );
      }

      // 4 quarter
      if (data.x >= 0 && data.y <= 0) {
        const temp = data.x - data.r;
        return data.y >= temp;
      }

      // 1 quarter
      if (data.x >= 0 && data.y >= 0) {
        return (
          Math.abs(data.x) <= Math.abs(data.r / 2) &&
          Math.abs(data.y) <= Math.abs(data.r / 2) &&
          Math.pow(data.x, 2) + Math.pow(data.y, 2) <= Math.pow(data.r / 2, 2)
        );
      }

      return false;
    }

    if (data.r < 0) {
      // 2 quarter
      if (data.x <= 0 && data.y >= 0) {
        return data.y - data.x - Math.abs(data.r) <= 0;
      }

      // 3 quarter
      if (data.x <= 0 && data.y <= 0) {
        return (
          Math.abs(data.x) <= Math.abs(data.r / 2) &&
          Math.abs(data.y) <= Math.abs(data.r / 2) &&
          Math.pow(data.x, 2) + Math.pow(data.y, 2) <= Math.pow(data.r / 2, 2)
        );
      }

      // 4 quarter
      if (data.x >= 0 && data.y <= 0) {
        return (
          Math.abs(data.x) <= Math.abs(data.r / 2) &&
          Math.abs(data.y) <= Math.abs(data.r)
        );
      }

      return false;
    }

    if (data.r == 0) {
      return false;
    }
  }
}
