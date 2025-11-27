select a.essen, b.name from essen a join person b on a.id = b.lieblingsessen;

select name from person where lieblingsessen =(select id from essen where essen='Schnitzel');