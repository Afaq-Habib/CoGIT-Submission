
import pandas as pd
from sklearn import linear_model
import statsmodels.api as sm

Stock_Market = {'Year': [2017,2017,2017,2017,2017,2017,2017,2017,2017,2017,2017,2017,2016,2016,2016,2016,2016,2016,2016,2016,2016,2016,2016,2016],
                'Month': [12, 11,10,9,8,7,6,5,4,3,2,1,12,11,10,9,8,7,6,5,4,3,2,1],
                'Interest_Rate': [2.75,2.5,2.5,2.5,2.5,2.5,2.5,2.25,2.25,2.25,2,2,2,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75],
                'Unemployment_Rate': [5.3,5.3,5.3,5.3,5.4,5.6,5.5,5.5,5.5,5.6,5.7,5.9,6,5.9,5.8,6.1,6.2,6.1,6.1,6.1,5.9,6.2,6.2,6.1],
                'Stock_Index_Price': [1464,1394,1357,1293,1256,1254,1234,1195,1159,1167,1130,1075,1047,965,943,958,971,949,884,866,876,822,704,719]        
                }

# Price = {
#     'brick': [20, 20, 40, 60, 40],
#     'cement': [10, 60 ,20 ,30, 30],
#     'price': [400,1600,600,800, 700]
#     # etc etc
# }



Price = {
    'cement': [530, 685, 580, 600, 530, 530, 530, 530, 530, 530, 530, 530, 530, 530],
    'sand': [600, 450, 500, 400, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
    'steel': [108000, 125000, 115000, 90000, 108000, 108000, 108000, 108000, 108000, 108000, 108000, 108000, 108000, 108000,],
    'concrete': [50, 45, 55, 35, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    'glass': [550, 590, 520, 630, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550,],
    'wood': [6500, 7000, 5600, 5900, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500,],
    'brick': [12500, 14000, 10200, 13000, 12500, 12500, 12500, 12500, 12500, 12500, 12500, 12500, 12500, 12500,],
    'stone': [50, 65, 45, 55, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    'plastic': [240, 170, 190, 210, 240, 240, 240, 240, 170, 170, 170, 170, 190, 190],
    'paint': [3700, 2850, 2200, 1890, 3700, 2850, 2200, 1890, 3700, 2850, 2200, 1890, 3700, 2850],
    'size': [10, 10, 10, 10, 20, 20, 20, 20, 5, 5, 5, 5, 5, 5],
    'floors': [2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1],
    'price': [4120500, 4220500, 2610500, 2720600, 8210500, 8200500, 4050500, 4050500, 2340500, 2410500, 2510500, 2610000, 1250000, 1350000]
}



df = pd.DataFrame(Price, columns = ['brick','cement','price', 'sand', 'steel', 'concrete', 'glass', 'wood', 'plastic', 'paint', 'size', 'floors'])



# X = df[['Interest_Rate','Unemployment_Rate']] # here we have 2 variables for multiple regression. If you just want to use one variable for simple linear regression, then use X = df['Interest_Rate'] for example.Alternatively, you may add additional variables within the brackets
X = df[['brick','cement', 'sand', 'steel', 'concrete', 'glass', 'wood', 'plastic', 'paint', 'size', 'floors',]]
Y = df['price']
#Y would have have 


# with sklearn
regr = linear_model.LinearRegression()
regr.fit(X, Y)

print('ACTUAL PRICE: \n', regr.intercept_)
print('Coefficients: \n', regr.coef_)

# prediction with sklearn
# New_Interest_Rate = 30
# New_Unemployment_Rate = 40

brick_price=14000
cement_price=530
sand_price=80000
steel_price=110000
concrete_price=30
glass_price=600
wood_price=6600
plastic_price=170
paint_price=2800
size_value=10
floors_value=2

# price? 
print ('Price of the house \n', regr.predict([[brick_price, cement_price, sand_price, steel_price, concrete_price, glass_price, wood_price, plastic_price, paint_price, size_value, floors_value]]))



# ****flask starts here


# **********************


# # with statsmodels
X = sm.add_constant(X) # adding a constant
 
model = sm.OLS(Y, X).fit()
predictions = model.predict(X) 
 
print_model = model.summary()
print(print_model)