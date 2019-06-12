import { Activity } from './activity.abstract';

export class CookieActivity extends Activity {


    public add(key: string | number, value: any, expired?: Date): Activity {
        let cookie: string = key + '=' + (typeof value === 'object' ? JSON.stringify(value) : value) + (expired ? ';expires=' + expired : '');
        document.cookie = cookie;
        return this;
    }
    
    public async get<T>(key: string | number): Promise<T> {
        let coockies = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        let cookie = coockies ? coockies[2] : null;
        try {
            return await JSON.parse(cookie);
        } catch (error) {
            return await cookie as any;
        }
    }
    public remove(key: string | number): Activity {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return this;
    }
    public removeAll(): void {
        document.cookie.split(";").forEach((c)=> { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
}