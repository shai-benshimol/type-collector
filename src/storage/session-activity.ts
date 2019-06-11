import { Activity } from './activity.abstract';

export class SessionActivity extends Activity{
    public add(key: string, value: any): Activity {
        sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
        return this;
    }    
    public async get<T>(key: string): Promise<T> {
        try {
            return await JSON.parse(sessionStorage.getItem(key) || '{}');
        } catch (error) {
            return await Object(sessionStorage.getItem(key));
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