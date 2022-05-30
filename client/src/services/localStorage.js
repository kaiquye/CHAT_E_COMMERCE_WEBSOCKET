var TokenName = '@Token'

export const useToken = () => ({
    getToken: () => {
        const Token = localStorage.getItem(TokenName);
        console.log('tokennnn', Token)
        if (Token) return Token
        return false;
    },
    setToken: (Token) => {
        localStorage.setItem(TokenName, Token);
    },
})