const RE_TELEPHONE = /^[2-9]{1}[0-9]{9}$/;

export const telephone = str => RE_TELEPHONE.test(str);
