

def findMidian(nums1,nums2):
    input_list = sorted(nums1+nums2)

    if(len(input_list)==2):
        return  ((input_list[0] + input_list[1])/2)
    else:
         
        
        
        if len(input_list) % 2 != 0:
            print("middle,")
            middle = int(len(input_list) / 2)
            return input_list[int(middle)]
        else:
            first_middle = int(len(input_list) / 2) - 1 # = 3 - 1 = 2
            second_middle = int(len(input_list) / 2)    # = 3
            
            return ((input_list[int(first_middle)] + input_list[int(second_middle-1)])/2)
    

print(
    findMidian([],[1,2,3,4,5,6]),
)

