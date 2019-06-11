import { Activity } from './activity.abstract';

export class SessionActivity extends Activity{
    public add(key: string, value: any): Activity {
        sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
        return this;
    }    
    public get<T>(key: string): any {
        try {
            return JSON.parse(sessionStorage.getItem(key) || '{}');
        } catch (error) {
            return sessionStorage.getItem(key);
        }
    }
    public remove(key: string): Activity {
        sessionStorage.removeItem(key);
        return this;
    }
    public removeAll(): void {
        sessionStorage.clear();
    }
}