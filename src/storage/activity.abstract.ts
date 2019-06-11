export abstract class Activity {
    public abstract add(key: string | number, value: any): Activity;
    public abstract get<T>(key: string | number): Promise<T>;
    public abstract remove(key: string | number): Activity;
    public abstract removeAll(): void;
}