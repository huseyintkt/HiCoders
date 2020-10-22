/**
 * The following code contains TDD (test driven development) approach.
 * the following functions are the part of a TDD-Framework.
 * - describe(...)
 * - it(..)
 *
 * Please concantrate on the body of it(...) functions and fix them!
 */

describe('Array tests', function() {

    describe('#arithmetic methods', function() {
        it('should result the right number', function() {
            var c = [3, 4, 9, 12]; // do not touch this
            c.shift();
            c[0].should.equal(4);
        });
        it('should be equal to the second item', function() {
            var c = new Array(23, 46); // do not touch this
            c.pop();
            c.push(35);
            (c[0] + 12).should.equal(c[1]);
        });
        it('should result the fourth element in the array', function() {
            var c = [3, 3, 3, 9]; // do not touch this
            c.pop();
            c.push(6);
            (c[0] + c[1]).should.equal(c[3]);
        });
        it('should give the result by using the combination of two arrays', function() {
            var c = new Array(2, 3); // do not touch this
            var a = new Array(4, 6); // do not touch this
            c.pop();
            c.push(2);
            (a[0] / 2).should.be.equal(c[1]);
        });
        it('should give the result by using the combination of two arrays', function() {
            var c = new Array("it", "switzerland", "training"); // do not touch this
            var a = ["KZO", "volketswil", "club"]; // do not touch this
            a.push("club");
            (c[0] + a[3]).should.equal("itclub");
        });
        it('should find the right array slot', function() {
            var c = new Array(5); // do not touch this
            c.unshift(5);
            c[0].should.be.equal(5);
        });
        it('should find and remove the item 2', function() {
            var c = [10, 22, 2, 34, 15, 3]; // do not touch this!
            c.splice(2, 1);
            c.should.be.deepEqual([10, 22, 34, 15, 3]);
        });
    });

    describe('#string-operation', function() {
        it('should create a string with given parameter as seperator', function() {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c.join("+").should.equal("i+t+c+l+u+b");
        });
        it('should create a string with manipulated content', function() {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c[2] = "C";
            c = c.join("");
            c.should.equal("itClub");
        });
    });

    describe('#join()', function() {
        it('should create a string with given parameter as seprator', function() {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            (c.join("+-") + "+-").should.equal("i+-t+-c+-l+-u+-b+-");
        });
    });

    describe('#length', function() {
        it('should give the number of elements in the array', function() {
            var c = ["it", "club", "schweiz", "KZO"]; // do not touch this
            c.push("new item");
            c.length.should.equal(5);
        });
    });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            let array = [1, 2, 3];
            array.pop();
            array.indexOf(3).should.be.equal(-1);
        });
    });

    describe('#sort()', function() {
        it('should sort the array in ascending order', function() {
            var c = [9, 2, 6, 0, -1]; // do not touch this
            c = c.sort((a, b) => a - b);
            c.should.be.deepEqual([-1, 0, 2, 6, 9]);
        });
        it('should sort the array in descending order', function() {
            var c = [-1, 1, 3, 2]; // do not touch this
            c = c.sort((a, b) => b - a);
            c.should.be.deepEqual([3, 2, 1, -1]);
        });
    });

    describe('#concat()', function() {
        it('should merge the given arrays', function() {
            var c = [4, 5]; // do not touch this
            var a = [8, 9]; // do not touch this
            var processed;
            a.unshift(7);
            a.pop();
            processed = c.concat(a);
            processed.should.be.deepEqual([4, 5, 7, 8]);
        });
        it('should merge the given arrays', function() {
            var c = ["A", "B"]; // do not touch this!
            var a = ["C", "D", "E"]; // do not touch this!
            var processed = c;
            processed = c.concat(a);
            processed.should.be.deepEqual(["A", "B", "C", "D", "E"]);
        });

    });

    describe('#push()', function() {
        it('should insert item at the end of the array', function() {
            var c = [10]; // do not touch this!
            var processed = c;
            c.push(11, 12);
            processed.should.be.deepEqual([10, 11, 12]);
        });
    });

    describe('#shift()', function() {
        it('should remove item at the front of the array', function() {
            var c = [10, 12, 13]; // do not touch this!
            var processed = c;
            c.shift();
            processed.should.be.deepEqual([12, 13]);
        });
    });

    describe('#unshift()', function() {
        it('should insert item in the begin of the array', function() {
            var c = [12, 13]; // do not touch this!
            var processed = c;
            processed.unshift(10);
            processed.should.be.deepEqual([10, 12, 13]);
        });
        it('should insert item as the first item in the array', function() {
            var c = [12, 13]; // do not touch this!
            var processed = c; // manuîpulate only this line
            processed.unshift(1, 10, 13);
            processed.should.be.deepEqual([1, 10, 13, 12, 13]);
        });
    });

    describe('#reverse()', function() {
        it('should change the order of items', function() {
            var c = [2, 101, 55]; // do not touch this!
            var processed = c;
            processed.reverse();
            processed.should.be.deepEqual([55, 101, 2]);
        });
        it('should reverse a string', function() {
            var c = "bulcti"; // do not touch this!
            var processed = c;
            processed = processed.split("").reverse().join("");
            processed.should.be.deepEqual("itclub");
        });
    });


    describe('#array methods', function() {
        it('can be used together', function() {
            var c = new Array(); // do not touch this
            c.push(1);
            c.pop();
            c.push(23);
            c.push(37);
            c.shift();
            c.unshift(5);
            c.unshift(2);

            (c[1] % c[0]).should.be.equal(1);
        });
        it('should give number of people rest in the queue', function() {
            var c = []; // do not touch this
            c.push('ferdi');
            c.push('cihad');
            c.push('cemil');
            c.pop();
            c.reverse();
            c.shift();
            c.unshift('mehmet');

            c.should.be.deepEqual(['mehmet', 'ferdi']);
        });
    });

    describe('#looping', function() {
        it('should increment the counter one by one', function() {
            var counter = 0; // do not touch this
            for (var index = 0; index < 5; index = index + 1) {
                counter = counter + 1;
            }

            counter.should.be.equal(8);
        });
        it('should increment the counter by array items', function() {
            var c = new Array(1, 2, 3, 4, 6);
            var counter = 0; // do not touch this!

            for (var index = 0; index < 5; index = index + 1) {
                counter = counter + c[index];
            }
            counter.should.be.equal(15);
        });
        it('should increment the counter randomly', function() {
            var c = []; // do not touch this!
            var maxNumber = 7;

            for (var index = 1; index < max; index = index + 1) {
                c[index] = index * Math.random();
            }
            c.length.should.be.equal(6);
            c[0].should.be.equal(0);
        });
        it('should change the array items indiviually', function() {
            var c = ["a", 'n', ' ', 'a', 't', "c", "l", 'u', 'b']; // do not touch this!

            for (var index = 1; index < c.length; index = index + 1) {
                c[index] = c[index];
            }

            c.should.be.equal('in itclub');
        });
        it('should select only the even numbers', function() {
            var c = new Array(1, 2, 3, 4, 5, 6); // do not touch this!
            var a = [];

            for (var index = 0; index < c.length; index = index + 1) {
                a.push(c[index]);
            }

            a.should.be.deepEqual([2, 4, 6]);
        });
        it('should help to find the maximum number', function() {
            var c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var max = 34; // get maximum number
            for (var index = 0; index < c.length; index = index + 1) {
                max = c[index];
            }
            max.should.be.equal(82);
        });
        it('should help to find the minimum number', function() {
            var c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var min = 34; // get minimum number
            for (var index = 0; index < c.length - 1; index = index + 1) {
                min = c[index];
            }
            min.should.be.equal(6);
        });
        it('should help to find the median', function() {
            var c = [13, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var median = 34; // get median f.i [6,1,5] => 6+1+5/(number of element = 3) = 4,
            // you can use reduce function but you dont have to.
            for (var index = 0; index < c.length; index = index + 1) {
                median = c[index];
            }
            median.should.be.equal(32);
        });
        it('should help to find the numbers factor of three ', function() {
            var c = [9, 21, 80, 23, 60, 11, 6]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                theNumbers.push(c[index]);
            }
            theNumbers.should.be.deepEqual([6, 9, 21, 60]);
        });
        it('should help to find the numbers which can be divided by 2 or 3', function() {
            var c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                theNumbers = c[index];
            }
            theNumbers.should.be.deepEqual([4, 6, 9, 21, 60, 80]);
        });
        it('should help to find the numbers which can be divided by both 2 and 3', function() {
            var c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                theNumbers = c[index];
            }
            theNumbers.should.be.deepEqual([6, 60]);
        });
        it('should help to find the strings whic containing the word "el"', function() {
            var c = ['elveda', 'selami', 'hadi', 'itclub', 'kel', 'heyelan', 'oooo!', 'saral', 'peri', 'deli']; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < 3; index = index + 1) {
                theNumbers = c[index];
            }
            theNumbers.should.be.deepEqual(['elveda', 'selami', 'kel', 'heyelan', 'deli']);
        });
        it('should help to find repeating numbers', function() {
            var c = [10, 21, 10, 23, 64, 21, 6]; // do not touch this!
            var processed = [];
            for (var index = 0; index < c.length; index = index + 1) {
                processed.push(c[index]);
            }
            processed.should.be.deepEqual([10, 21]);
        });
        it('should find the numbers less then 100', function() {
            var c = [10, 83, 100, 1000]; // do not touch this!
            var processed = [];
            var index = 0;
            while (index < c.length) {
                index = index + 1;
                processed.push(c[index]);
            }
            processed.should.be.deepEqual([10, 83, 100]);
        });
    });


    describe('#conditionals', function() {
        it('should choose one one value', function() {
            var c = true; // do not touch this
            var processed = 1;
            if (c) {
                processed = 2;
            }

            processed.should.be.equal(1);
        });
        it('should evaluate the condition to a boolean', function() {
            var c = Number.isNaN('NaN'); // do not touch this
            var processed = 0;
            if (c) {
                processed = 2;
            } else {
                processed = 1;
            }

            processed.should.be.equal(0);
        });
        it('should evaluate the condition with else-if to a boolean', function() {
            var c = 'mesut'; // do not touch this
            var processed = null;

            if (c === 'ferdi') {
                processed = 'progress';
            } else if (c === 'mesut') {
                processed = 'take easy';
            } else {
                processed = 'go forward';
            }

            processed.should.be.equal('take it easy');
        });
        it('should evaluate the ternary operator to a value', function() {
            var c = 'iskender'; // do not touch this
            var processed = c === 'iskender' ? "AC KALDIK YINE" : 'ENFESSS';

            processed.should.be.equal('ENFESS');
        });
        it('should evaluate the nested ternary operator to a value', function() {
            var c = 'mezut'; // do not touch this
            var processed = c === 'mesut' ?
                'adana' : c === 'ferdi' ?
                'giresun' : c === 'mustafa' ?
                'antalya' : 'gurbet'

            processed.should.be.equal('adana');
        });
        it('should evaluate switch case ', function() {
            var city = 'adana';
            var country = null;

            switch (city) {
                case 'adana':
                case 'istanbul':
                    country = 'NK';
                    break;
                case 'newyork':
                    country = 'US';
                    break;
                case 'zurich':
                case 'st.gallen':
                case 'luzern':
                    country = 'CH'
            }

            country.should.be.equal('CH');
        });
    });
});