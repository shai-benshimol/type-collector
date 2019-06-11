import { Activity } from './activity.abstract';

export class CookieActivity extends Activity {


    public add(key: string, value: any, expired?: Date): Activity {
        let cookie: string = key + '=' + (typeof value === 'object' ? JSON.stringify(value) : value) + (expired ? ';expires=' + expired : '');
        document.cookie = cookie;
        return this;
    }

    public get<T>(key: string): any {
        let coockies = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        let cookie = coockies ? coockies[2] : null;
        try {
            return cookie ? JSON.parse(cookie) : null;
        } catch (error) {
            return cookie;
        }
    }
    public remove(key: string): Activity {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return this;
    }
    public removeAll(): void {
        document.cookie.split(";").forEach((c)=> { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
}