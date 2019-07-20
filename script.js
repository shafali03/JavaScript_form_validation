
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')



form.addEventListener('submit', (e) => {
    if message = []
    if (name.value === '' || name.value == null) {
            messages.push('Name is required')
        }

    if (password.length <= 6) {
        message.push('Password need to be longer than 6 characters')
    }

    if (password.value >= 20) {
        message.push('Password need to be less than 20 characters')
    }


    if (password.value === 'password') {
        message.push('Password cannot be password')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
    e.preventDefault()
})
