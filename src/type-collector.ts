import { CookieActivity } from './storage/cookie-activity';
import { SessionActivity } from './storage/session-activity';
import { StorageActivity } from './storage/storage-activity';
export module TypeCollector {

    export class Factory {
        public static Storage = new StorageActivity();
        public static Session = new SessionActivity();
        public static Cookie = new CookieActivity();
    }
    export function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
}