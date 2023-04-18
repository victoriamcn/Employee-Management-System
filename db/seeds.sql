use employees;

INSERT INTO department
    (name)
VALUES
    ('Clerk'),
    ('Health'),
    ('Planning and Zoning'),
    ('Parks'),
    ('Animal Control'),
    ('City Council'),
    ('Mayoral Office'),
    ('Public Works');

INSERT INTO role
    (title,salary,department_id)
VALUES
    ('Stenographer', 45000, 1),
    ('PR Director', 70000, 2),
    ('City Manager', 98000, 3),
    ('Asst City Manager', 90000, 3),
    ('Parks Director', 85000, 4),
    ('Deputy Director', 80000, 4),
    ('Office Manager', 70000, 1),
    ('Event Coordinator', 50000, 4),
    ('Event Assistant', 35000, 4),
    ('Animal Control', 55000, 5),
    ('Councilperson', 80000, 6),
    ('Mayor', 100000, 7),
    ('Park Ranger', 48000, 4),
    ('Maintenance Tech', 50000, 8),
    ('Director', 85000, 4);

INSERT INTO employee
    (first_name,last_name,role_id,manager_id)
VALUES
    ('Ethel', 'Beavers', 1, 7),
    ('Ann', 'Perkins', 2, 7),
    ('Chris', 'Trager', 2, 7),
    ('Ben', 'Wyatt', 3, 3),
    ('Ron', 'Swanson', 4, 7),
    ('Leslie', 'Knope', 6, 5),
    ('Bill', 'Gunderson', 12, 1),
    ('Donna', 'Meagle', 7, 5),
    ('Tom', 'Haverford', 9, 6),
    ('April', 'Ludgate', 8, 5),
    ('Andy', 'Dwyer', 9, 5),
    ('Jerry', 'Gergich', 9, 5),
    ('Harris', 'Doe', 10, 6),
    ('Brett', 'Smith', 10, 6),
    ('Douglass', 'Howser', 11, 7),
    ('Jeremy', 'Jamm', 11, 7),
    ('Fielding', 'Milton', 11, 7),
    ('Bill', 'Dexhart', 11, 7),
    ('Carl', 'Lorthner', 13, 5),
    ('George', 'Williams', 14, 21),
    ('Kyle', 'Kyles', 15, 7);