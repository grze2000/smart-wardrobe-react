import ColorHash from 'color-hash';

const colorHash = new ColorHash();

export const stringToColor = (str: string) => {
    return colorHash.hex(str);
}