const husband = 'Ali Mustafa';

function wives() {
    function firstWife() {
        const wife1 = 'Fatma Mohammed';

        function secondWife() {
            const wife2 = 'Halima Khadija';

            function thirdWife() {
                const wife3 = 'Rahma Twalib';

                function fourthWife() {
                    const wife4 = 'Nasra Adan';

                    return `${wife1} -> ${wife2} -> ${wife3} -> ${wife4}`;
                }

                const results = fourthWife();
                return results;
            }

            const results = thirdWife();
            return results;
        }

        const results = secondWife();
        return results;
    }
    const results = firstWife();

    return `Husband Name: ${husband} listed wives: ${results}`;
}

console.log(wives());
