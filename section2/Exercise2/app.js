new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Alert!')
            },
            keyboardEvent: function(event) {
                this.value = event.target.value
            }
        }
    });