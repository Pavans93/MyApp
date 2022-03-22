import { Injectable } from '@angular/core';
import CryptoES from 'crypto-es';

@Injectable({
    providedIn: 'root'
})

export class EncryptDecryptService {
    constructor() { }
    //The set method is used for encrypt the value.
    set(keys: any, value: any) {
        var key = CryptoES.enc.Utf8.parse(keys);
        var iv = CryptoES.enc.Utf8.parse(keys);
        var encrypted = CryptoES.AES.encrypt(CryptoES.enc.Utf8.parse(value.toString()), key,
            {
                // keySize: 128 / 8,
                iv: iv,
                mode: CryptoES.mode.CBC,
                padding: CryptoES.pad.Pkcs7
            });
        return encrypted.toString();
    }

    //The get method is used for decrypt the value.
    get(keys: any, value: any) {
        var key = CryptoES.enc.Utf8.parse(keys);
        var iv = CryptoES.enc.Utf8.parse(keys);
        var decrypted = CryptoES.AES.decrypt(value, key,
            {
                // keySize: 128 / 8,
                iv: iv,
                mode: CryptoES.mode.CBC,
                padding: CryptoES.pad.Pkcs7
            });
        return decrypted.toString(CryptoES.enc.Utf8);
    }

}