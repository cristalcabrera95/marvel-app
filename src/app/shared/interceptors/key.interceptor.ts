import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Md5 } from 'ts-md5';

export const keyInterceptor: HttpInterceptorFn = (req, next) => {
  const publicKey = environment.publicApiKey;
  const privatekey = environment.privateApiKey;
  const timestamp = new Date().getTime().toString();
  const hash = Md5.hashStr(timestamp + privatekey + publicKey);

  const authReq = req.clone({
    setParams: {
      'apikey': publicKey,
      'ts': timestamp,
      'hash': hash
    }
  });

  return next(authReq);
};
