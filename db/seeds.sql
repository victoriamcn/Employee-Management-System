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
    ('Bill', 'Gunderson', 12, null),
    ('Ron', 'Swanson', 4, 1),
    ('Leslie', 'Knope', 6, 2),
    ('Donna', 'Meagle', 7, 3),
    ('Tom', 'Haverford', 9, 3),
    ('April', 'Ludgate', 8, 3),
    ('Andy', 'Dwyer', 9, 3),
    ('Jerry', 'Gergich', 9, 3),
    ('Harris', 'Doe', 10, 3),
    ('Brett', 'Smith', 10, 3),
    ('Chris', 'Trager', 2, 1),
    ('Ben', 'Wyatt', 3, 11),
    ('Ethel', 'Beavers', 1, 1), 
    ('Ann', 'Perkins', 2, 1), 
    ('Douglass', 'Howser', 11, 1),
    ('Jeremy', 'Jamm', 11, 1),
    ('Fielding', 'Milton', 11, 1),
    ('Bill', 'Dexhart', 11, 1),
    ('Carl', 'Lorthner', 13, 2),
    ('George', 'Williams', 14, 1),
    ('Kyle', 'Kyles', 15, 1);