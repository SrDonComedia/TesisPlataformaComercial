
var freshworksWidget = (function () {
    return {
        show: function (widget_id) {
            document.write(`<script type='text/javascript' src='https://widget.freshworks.com/widgets/${widget_id}.js' async defer></script>`);
            window.fwSettings = {
                'widget_id': widget_id
            };
            !function () {
                if ("function" != typeof window.FreshworksWidget) {
                    var n = function () {
                        n.q.push(arguments)
                    };
                    n.q = [], window.FreshworksWidget = n
                }
            }()

            FreshworksWidget('hideChoices', 'ticketForm', {
                'priority': [2, 3],
                'custom_fields': {
                    'cf_categora_de_servicio_2': ['Desbloquear NIP Terrae', 'Reportar problema Efinis', 'Recuperar clave correo uft.edu']
                }
            });
        }
    }
})(freshworksWidget || {})