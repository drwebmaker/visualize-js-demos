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
                alert("Can't render report: " + err.message);
            }
        });

    }
);