-- script that creates a function SafeDiv
-- fn devides and returns the 1st and 3nd num or returns 0 in 2nd num = 0
DROP FUNCTION IF EXISTS SafeDiv;
DELIMITER $$
CREATE FUNCTION SafeDiv (a INT, b INT)
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE result FLOAT DEFAULT 0;

    IF b != 0 THEN
        SET result = a / b;
    END IF;
    RETURN result;
END $$
DELIMITER ;