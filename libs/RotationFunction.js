//following two rotation functions are updated versions of code from: https://github.com/mrdoob/three.js/issues/1219  
//updated to work in latest versions (r52 tested) of THREE.js    
// Rotate an object around an axis in object space  

var rotationMatrix  function rotateAroundObjectAxis( object, axis, radians ) {  

rotationMatrix = new THREE.Matrix4();  
rotationMatrix.makeRotationAxis( axis.normalize(), radians );  
object.matrix.multiplySelf( rotationMatrix ); // post-multiply  
object.rotation.setEulerFromRotationMatrix(object.matrix, object.order);  

}    

// Rotate an object around an axis in world space (the axis passes through the object's position)  

var rotWorldMatrix;  

function rotateAroundWorldAxis( object, axis, radians ) {  

rotWorldMatrix = new THREE.Matrix4();  
rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);  
rotWorldMatrix.multiplySelf(object.matrix); 
// pre-multiply  object.matrix = rotWorldMatrix;  
object.rotation.setEulerFromRotationMatrix(object.matrix, object.order);  

}