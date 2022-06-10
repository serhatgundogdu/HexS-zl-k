function isHex(color) {
  var reg = /^#([0-9a-f]{3}){1,2}$/i;

  if (reg.test(color)) return true;

  return false;
}

export default isHex;
