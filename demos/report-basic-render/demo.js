visualize({
        auth: {
            name: "superuser",
            password: "superuser"
        }
    },
    function (v) {

        v("#report-container").report({
            resource: "/public/Samples/Reports/Cities",
            error: function (err) {
                alert("Report 1: " + err.message);
            }
        });

        v("#report-container2").report({
            resource: "/public/Samples/Reports/States",
            error: function (err) {
                alert("Report 2: " + err.message);
            }
        });

    }
);