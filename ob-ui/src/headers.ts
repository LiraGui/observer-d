import { HttpHeaders } from '@angular/common/http';
export function createAuthorizationHeader(names = [], values = []) {
    let heads: any = {};

    heads['Access-Control-Allow-Origin'] = '*';

    heads['ucloudname'] = [localStorage.getItem('username')];
    heads['clusterid'] = [localStorage.getItem('clusterID')];
    heads['groupname'] = [localStorage.getItem('group')];
    heads['groupid'] = [localStorage.getItem('groupid')];
    heads['namespace'] = [localStorage.getItem('namespace')];
    heads['session'] = [localStorage.getItem('mangueSession')];

    if (names.length === values.length) {
        for (let i = 0; i < names.length; i++) {
            heads[names[i]] = [values[i]];
        }
    }

    const headers = new HttpHeaders(heads);
    return headers;
}