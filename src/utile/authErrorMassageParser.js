export default function(errorCode) {
    switch(errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz e-posta adresi.';
        case 'auth/user-disabled':
            return 'Kullanıcı devre dışı bırakıldı.';
        case 'auth/user-not-found':
            return 'Kullanıcı bulunamadı.';
        case 'auth/wrong-password':
            return 'Yanlış parola.';
        case 'auth/email-already-in-use':
            return 'Bu e-posta zaten kullanımda.';
        case 'auth/weak-password':
            return 'Parola çok zayıf.';
        case 'auth/invalid-credential':
            return 'Geçersiz kimlik bilgisi.';
        default:
            return 'Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.';
    }
}