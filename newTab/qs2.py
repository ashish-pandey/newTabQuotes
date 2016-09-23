import requests
from BeautifulSoup import BeautifulSoup

search_url = 'http://www.bolteraho.com/badass-harvey-specter-quotes/'

#url = raw_input("Entet the youtube url: ")
response = requests.get(search_url)
html = response.content
soup = BeautifulSoup(html)
#get all the divs
allDivs = soup.findAll("strong")
i = 0
f1 = open('suits.txt' , 'w')
#f2 = open('one_piece_by.txt' , 'w')
for row in allDivs:
	quote = row.getText().encode("utf-8")
	if len(quote) <30:
		continue
	if len(quote)>110:
		continue;
	i+=1;
	print str(i)
	f1.write('"' + quote + " , " + "\n")

