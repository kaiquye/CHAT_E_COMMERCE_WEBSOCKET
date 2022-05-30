let TokenName = '@Token'

export const useToken = () => ({
    getToken: () => {
        const Token = localStorage.getItem(TokenName);
        if (Token) return Token
        return false;
    },
    setToken: (Token) => {
        localStorage.setItem(TokenName, Token);
    },
})