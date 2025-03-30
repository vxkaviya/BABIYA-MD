// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "BABIYA-MD [KILL]>>>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhxY0dNMzViWkF0b3NranZIOStpNFZYMFFYdktBYlFnSERSM1Z6MUQzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUd3Q25PdkM2OXpiczVzWGFNeHRxdC9jZGF0NDhmMGNPLzBZeThjZzgxRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSjBJaVQxOE8rMkRjbVZ1NXgyUjVnNnRJODNkVkJHTSt0M3VDN3hURlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFZ0J3TWdVUjF6K1BhVE45WS9vTVhZY0RSeEErOE1pWm14M043Y2w2R1hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGakFpVDZYZnA1MHczKzBwcjNFQWczUE5iTEoyYWxmdm1rdmdtZHdzVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXNUNoc1pwbWdPcURJTG9ncjZnbS9xZjlFeXF6Z3JYVDJHd2lNZTl6Q1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBRdTAyQURJcEljWlU4Smx0Mlo5eU5sN255d3F4UmhvRkJVRWlNem1sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmNNVTJjM2k3QzdUZlloeDloRDBpUUFyTjJJUExCcG0zazJSdGMrdDIzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllvVm1rOExmc29KZ3Q0ZGtnOWtzcGc4STRMMjRtNDRQYVV6Y0lRRFloTTlUbTljc2pON01YeVNoa2szb080OEpuaW5ja1BWMzdoZGxwMkp2YjZtcGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJ6Sm5Ib3ZXYThKcWNrTHJ0aWt4NXE1TjdIclRjRHQ1WVhDK0JJK1FyU3JjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNjc2Mjc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQTU5MDhFRUQwNzA3ODcwNDE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDMzMTE4NTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhZWktVMU52UVBhT2Z3cGNrM2xKSnciLCJwaG9uZUlkIjoiOTMwYWEyMzctZTA3NC00OGZlLTk2NTYtNzUwOTM4YzA5MWUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRIUHZLQ29VbURnQngxM1A5c3VTNDhKRitObz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJd2F4U0FCbi9lN2t2LzVqcWJGOHl3Q1o0QVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUgyNUNFMlciLCJtZSI6eyJpZCI6Ijk0NzYyNjc2Mjc3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLlxu4rGkXG7Jhlxu4oKzXG7isaAgXG5cbvCdl6lcbvCdl5wgXG7wnZejIFxuXG4uIFxuXG7wnZerXG7wnZecIFxu8J2XpyBcbvCdl5hcbvCdl6VcblxuLiAgXG5cbvCdl54gXG7wnZeUIFxu8J2XqSBcbvCdl5xcbvCdl6wgXG7wnZeUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUysvN0lFRU42bm83OEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKeTdoMjVrV01VTGJzVS9rb2szbVVIUGZtN042NnJHS3JQU2xVYlBhZVNzPSIsImFjY291bnRTaWduYXR1cmUiOiJKUW96cXJRT1AxQittdHBsZzF4VDBaT0hWc20rRVJSUzR2cEFvcGpwMEtlb1BaZnEwVXYyc01vaTI4MzhpZkZGd3NoaHVzaFAvSG5IMXNEZkllSTlpQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWDk1b3dHM05DL2NjQnlKdExXYW1Jem1XQnBLOUNGTFdmZGFXNm5tUCtUak9leTlta0hweHlTbVVRMnZsY1NMU0VMMlExV2wxc2RSbE9aTW5hYzdCaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjY3NjI3Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNjdTRkdVpGakZDMjdGUDVLSk41bEJ6MzV1emV1cXhpcXowcFZHejJua3IifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMzMTE4NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2dFIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ !== undefined ? process.env.AUTO_STATUS_READ === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "BABIYA-MD",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94764978991",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
