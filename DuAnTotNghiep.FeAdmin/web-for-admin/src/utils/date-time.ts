import { toZonedTime, format } from 'date-fns-tz';

export function convertToTimezone7(isoTime: string): string {
    // Định nghĩa múi giờ +7
    const timeZone = 'Asia/Bangkok'; // Đây là múi giờ +7

    // Chuyển đổi thời gian UTC sang múi giờ +7
    const zonedTime = toZonedTime(isoTime, timeZone);

    // Định dạng lại thời gian (ISO 8601 nhưng với múi giờ +7)
    return format(zonedTime, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone });
}
