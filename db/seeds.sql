use employees;

INSERT INTO department
    (name)
VALUES
    ('Clerk Department'), --1
    ('Health Department'), --2
    ('Planning & Zoning'), --3
    ('Parks & Recreation'),  --4
    ('Animal Control'),  --5
    ('City Council'), --6
    ('Mayor'), --7
    ('Public Works Department'), --8

INSERT INTO role
    (title,salary,department_id)
VALUES
    ('Municipal Stenographer', 45000, 1), --1
    ('Public Relations Director', 70000, 2), --2
    ('City Manager', 98000, 3), --3
    ('Assistant City Manager', 90000, 3), --4
    ('Director of Parks and Recreation', 85000, 4), --5
    ('Deputy Director', 80000, 4), --6
    ('Office Manager', 70000, 1), --7
    ('Recreation Coordinator', 50000, 4),  --8
    ('Recreation Assistant', 35000, 4),  --9
    ('Animal Control Deputy', 55000, 5),  --10
    ('Councilperson', 80000, 6),  --11
    ('Mayor', 100000, 7),   --12
    ('Park Ranger', 48000, 4), --13
    ('Maintenance Technician', 50000, 8),  --14
    ('Director of Public Works', 85000, 4);  --15

INSERT INTO employee
    (first_name,last_name,role_id,manager_id)
VALUES
    ('Ethel', 'Beavers', 1, 7), --1
    ('Ann', 'Perkins', 2, 7),  --2
    ('Chris', 'Trager', 2, 7),  --3
    ('Ben', 'Wyatt', 3, 3),         --4
    ('Ron', 'Swanson', 4, 7),  --5
    ('Leslie', 'Knope', 6, 5), --6
    ('Bill', 'Gunderson', 12, NULL), --7
    ('Donna', 'Meagle', 7, 5)
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
    ('Kyle', 'Kyles', 15, 7); --21
