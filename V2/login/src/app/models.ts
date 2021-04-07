export class Machine{
    constructor(){}
    public id: number;
    public machine_code: string;
    public description: string;
    public hourly_rent: number;
    public maxhoursperday: number;
}

export class Job{
    constructor(){}
    public id: number;
    public code: string;
    public description: string;
    public hourly_rate: number;
    public maxhoursperday: number;

}

export class Timecard{
    constructor(){}
    public id: number;
    public sitecode: string;
    public contractor_name: string;
    public total_hours: number;
    public total_amount: number;
    public status: string;
}
