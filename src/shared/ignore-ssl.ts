import * as https from 'https';

export default new https.Agent({ rejectUnauthorized: false });
