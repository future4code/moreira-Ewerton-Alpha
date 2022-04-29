import * as bycrypt from 'bcryptjs'

export class HashManager {
    public async hash( text : string) : Promise<string>{
        const rounds = Number(process.env.BRYPT_COST);
        const salt= await bycrypt.genSalt(rounds);
        return bycrypt.hash(text, salt)
    
    }
   
    public async compare(text: string, hash: string): Promise<boolean> {
     return bycrypt.compare(text , hash)
    }
}

