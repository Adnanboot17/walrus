import a7_0x3a05bc from './logger.js';
import a7_0x451489 from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import '../core/network/rpc.js';
import { Config } from '../../config/config.js';
import { COINENUM } from '../core/coin/coin_enum.js';

class Twist {
  constructor() {
    // No need to initialize Twisters anymore
  }

  log(_0x301adf = '', _0x1cdddd = '', _0x2d1c53 = new a7_0x451489(), _0x42c820) {
    const _0x1b5460 = privateKey.indexOf(_0x1cdddd);
    if (_0x42c820 == undefined) {
      a7_0x3a05bc.info("Account " + (_0x1b5460 + 0x1) + " - " + _0x301adf);
      _0x42c820 = '-';
    }
    const _0x2245d2 = _0x2d1c53.address ?? '-';
    const _0x5935a3 = _0x2d1c53.balance ?? [];
    const _0x15ec06 = _0x5935a3.find(_0x8b39b9 => _0x8b39b9.coinType === COINENUM.SUI);
    const _0x20c244 = (_0x15ec06 ? _0x15ec06.totalBalance : '?') + " SUI";
    const _0x78cc59 = _0x5935a3.find(_0x1d3763 => _0x1d3763.coinType === COINENUM.WAL);
    const _0xb4b41b = (_0x78cc59 ? _0x78cc59.totalBalance : '?') + " WAL";

    console.log(`
================== Account ${_0x1b5460 + 1} =================
Address      : ${_0x2245d2}
Balance      : - ${_0x20c244}
               - ${_0xb4b41b}
SWAP Count   : ${_0x2d1c53.txCount ?? 0} / ${Config.SWAPCOUNT} ${(_0x2d1c53.txCount ?? 0) === Config.SWAPCOUNT ? "Finished" : ''}
               
Status : ${_0x301adf}
Delay : ${_0x42c820}
==============================================
    `);
  }

  info(_0x53e8be = '') {
    console.log(`
==============================================
Info : ${_0x53e8be}
==============================================
    `);
  }

  clearInfo() {
    console.clear(); // Clear the console log
  }

  clear(_0x3795ee) {
    console.clear(); // Clear specific logs (simplified)
  }
}

export default new Twist();