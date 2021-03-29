document.addEventListener('DOMContentLoaded', () => {
    let OwnerName = document.getElementById('OwnerName');
    let KittyName = document.getElementById('CatName');
    let Password = document.getElementById('Password');
    let ConfirmPassword = document.getElementById('ConfirmPassword');
    let Breed = document.getElementById('Breed');
    document.getElementById('SignBtn').addEventListener('click', () => {
        document.getElementById('OwnerNameModal').value = OwnerName.value;
        document.getElementById('CatNameModal').value = KittyName.value;
        document.getElementById('PasswordModal').value = Password.value;
        document.getElementById('ConfirmPasswordModal').value = ConfirmPassword.value;
        document.getElementById('BreedModal').value = Breed.value;
        document.getElementById('exampleModalLabel').innerText = `New account for ${KittyName.value}`;
    });
});