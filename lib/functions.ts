/**
 * Check if 2 arrays are equal
 * @param a 
 * @param b 
 * @returns bool
 */
export const equalArrays =
    (a: any[], b: any[]) =>
        a.length === b.length
        &&
        a.every(
            (element:any, index:any) =>
                element === b[index]
        );



/**
 * Linear transition function (this doesn't do anything)
 * @param t 
 * @returns number
 */
export const linear = (t: number): number => t
/**
 * Cubic transition function ( use domain [0, 1] )
 * @param t 
 * @returns number
 */
export const cubic = (t: number): number => {
    return 3 * Math.pow(t, 2) - 2 * Math.pow(t, 3)
}
