import api from '.';

const endpoint = api.url('/ra');

export function fetchRemoteAccessState() {
  return endpoint.get('/').json();
}

export function sendUpdateAllowRemote(allow) {
  return endpoint.post({ allow }, '/allow_remote').res();
}

export function sendUpdateTimeoutGivesControl(timeoutGivesControl) {
  return endpoint.post({ timeoutGivesControl }, '/timeout_gives_control').res();
}

export function sendUpdateNickname(name) {
  return endpoint.post({ name }, '/update_user_nickname').res();
}

export function sendRequestControl(control, message, name, userInfo) {
  return endpoint
    .post({ control, message, name, userInfo }, '/request_control')
    .res();
}

export function sendRespondToControlRequest(giveControl, message) {
  return endpoint
    .post({ giveControl, message }, '/request_control_response')
    .res();
}

export function sendTakeControl() {
  return endpoint.post(undefined, '/take_control').res();
}

export function sendGiveControl(username) {
  return endpoint.post({ username }, '/give_control').res();
}

export function sendLogoutUser(username) {
  return endpoint.post({ username }, '/logout_user').res();
}

export function fetchChatMessages() {
  return endpoint.get('/chat').json();
}

export function sendChatMessage(message, username) {
  return endpoint.post({ message, username }, '/chat').res();
}