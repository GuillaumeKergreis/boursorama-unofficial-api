class Util {

    /**
     * Convert a string balance to a number (in euros)
     * @param {string} stringBalance
     * @return {number}
     */
    static stringBalanceToNumber(stringBalance) {
        return parseFloat(stringBalance.toString()
            .replace(' ', '')
            .replace(' ', '')
            .replace('€', '')
            .replace(',', '.'));
    }

}

module.exports = Util;
